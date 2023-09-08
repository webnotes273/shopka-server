import {BadRequestException, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async getFavoritesIdsFromUser(userEmail: string) {
        const currentFavoritIds = await this.prismaService.user.findUnique({
            where: {
                email: userEmail
            },
            select: {
                favoriteIds: true
            }
        });
        return currentFavoritIds;
    }

    async addToWatchList(productId: string, userEmail: string) {
        const currentFavoritIds = await this.getFavoritesIdsFromUser(userEmail);

        if (!currentFavoritIds) {
            return new BadRequestException();
        }

        return await this.prismaService.user.update({
            where: {
                email: userEmail
            },
            data: {
                favoriteIds: [...currentFavoritIds.favoriteIds, productId]
            }
        });
    }

    async removeFromWatchList(productId: string, userEmail: string) {
        const currentFavoritIds = await this.getFavoritesIdsFromUser(userEmail);

        if (!currentFavoritIds) {
            return new BadRequestException();
        }

        return await this.prismaService.user.update({
            where: {
                email: userEmail
            },
            data: {
                favoriteIds: currentFavoritIds.favoriteIds.filter(id => id !== productId)
            }
        });
    }
}
