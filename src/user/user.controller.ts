import {BadRequestException, Controller, Get, Param, Patch, Query} from '@nestjs/common';
import {UserService} from "./user.service";
import {GetUserEmail} from "../decorators/get-user-email.decorator";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/:email')
    async getFavoritesIdsFromUser(
        @Param('email') userEmail: string
    ): Promise<string[] | BadRequestException> {
        const currentFavoritIds = await this.userService.getFavoritesIdsFromUser(userEmail);
        if (!currentFavoritIds) {
            return new BadRequestException();
        }
        console.log(currentFavoritIds.favoriteIds, 'currentFavoritIds.favoriteIds')
        return currentFavoritIds.favoriteIds;
    }

    @Patch('/add-to-watch-list/:productId')
    async addToWatchList(
        @Param('productId') productId: string,
        @GetUserEmail() userEmail: string
    ) {
        return await this.userService.addToWatchList(productId, userEmail);
    }

    @Patch('/remove-from-watch-list/:productId')
    async removeFromWatchList(
        @Param('productId') productId: string,
        @GetUserEmail() userEmail: string
    ) {
        return await this.userService.removeFromWatchList(productId, userEmail);
    }
}
