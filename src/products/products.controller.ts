import {Controller, Get, Query} from '@nestjs/common';
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async getPosts(
        @Query() params: string,
    ) {
        return await this.productsService.getProducts(params);
    }
}
