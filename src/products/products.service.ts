import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ProductsService {
    constructor(private readonly prismaService: PrismaService) {}

    async getProducts(params) {
        const {
            name,
            min_price: minPrice,
            max_price: maxPrice
        } = params;

        let query: any = {};

        if (minPrice && maxPrice) {
            query = {
                where: {
                    price: {
                        gte: Number(minPrice * 100),
                        lte: Number(maxPrice * 100)
                    }
                }
            }
        }

        if (name) {
            query = {
                take: 5,
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
            }
        }

        console.log('query ', query)
        const result = await this.prismaService.products.findMany(query);
        console.log('result ', result);
        return result;
    }
}
