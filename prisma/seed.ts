import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function seedProducts() {
  try {

    // Delete old data
    const candidate = await prisma.user.findUnique({
      where: {
        email: 'anton@gmail.com'
      }
    })
    if (candidate) {
      await prisma.user.delete({
        where: {
          email: 'anton@gmail.com'
        }
      });
    }

    await prisma.products.deleteMany();

    // Create new data
    await prisma.user.create({
      data: {
        name: 'Anton',
        email: 'anton@gmail.com',
      },
    });

    await prisma.products.create({
      data: {
        name: 'Vintage Typewriter',
        description:
          'Vintage Typewriter to post awesome stories about UI design and webdev.',
        additionalText: 'Eligible for Shipping To Mars or somewhere else',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694093835/Image_x5mbcf.png',
        rate: 300, // EG: 3.00
        price: 4950 // EG: 49.50
      },
    });

    await prisma.products.create({
      data: {
        name: 'Lee Pucker',
        description:
          'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
        additionalText: '1258 bids, 359 watchers $5.95 for shipping',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694095159/Shoes_rmw43z.png',
        rate: 400,
        price: 1395 // EG: 13.95
      },
    });

    await prisma.products.create({
      data: {
        name: 'Timesaving kitten',
        description:
          'Timesaving kitten to save months on development. Playful, cute, cheap!',
        additionalText: 'Eligible for nothing :(',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694095711/kitten_fucr6s.png',
        rate: 500,
        price: 52899
      },
    });

    await prisma.products.create({
      data: {
        name: 'Plastic useless plugs',
        description:
          'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
        additionalText: 'Wordwide shitting available Buyers protection possible!',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694095711/plastic_ee0oqv.png',
        rate: 500,
        price: 1278
      },
    });

    await prisma.products.create({
      data: {
        name: 'Creativity stimulating lotion',
        description:
          'Creativity stimulating lotion. Drink every morning to generate better ideas!',
        additionalText: 'Wordwide shifting available Buyers protection possible!',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/5_fhsd8t.png',
        rate: 499,
        price: 1248
      },
    });

    await prisma.products.create({
      data: {
        name: 'Prototyping items',
        description:
          'Prototyping items to create a lot if useless things...',
        additionalText: 'Wordwide shifting available Buyers protection possible!',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/6_bsnh5z.png',
        rate: 200,
        price: 12899
      },
    });

    await prisma.products.create({
      data: {
        name: 'John Von',
        description:
          'John Von Ebalkin SPRING',
        additionalText: '1258 bids, 359 watchers $5.95 for shipping',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/7_jspycv.png',
        rate: 456,
        price: 1395
      },
    });

    await prisma.products.create({
      data: {
        name: 'Envelope, Stripes, Pencil and etc',
        description:
          'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
        additionalText: 'Eligible for Shipping To Mars or somewhere else',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/8_rovysq.png',
        rate: 477,
        price: 950
      },
    });

    await prisma.products.create({
      data: {
        name: 'Professional teadrinking set',
        description:
          'Professional teadrinking set for every designer and developer',
        additionalText: 'Eligible for nothing :(',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/9_c2tihj.png',
        rate: 487,
        price: 12899
      },
    });

    await prisma.products.create({
      data: {
        name: 'One string Bonsai description',
        description:
          'One string Bonsai description',
        additionalText: 'Wordwide shifting available Buyers protection possible!',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/10_mzsdxn.png',
        rate: 500,
        price: 1168
      },
    });

    await prisma.products.create({
      data: {
        name: 'Simply best item',
        description:
          'Simply best item in town to shine bright with your Nine Inch Nails',
        additionalText: 'Eligible for Shipping To Mars or somewhere else',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/11_dqja4j.png',
        rate: 400,
        price: 125
      },
    });

    await prisma.products.create({
      data: {
        name: '1258 bids, 359 watchers $5.95 for shipping',
        description:
          'KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!',
        additionalText: 'Wordwide shifting available Buyers protection possible!',
        imageUrl:
          'https://res.cloudinary.com/dgwnongyj/image/upload/v1694120472/12_gjwv3x.png',
        rate: 500,
        price: 2325
      },
    });

  } catch (error) {
    console.error(error, 'error in seeding');
    process.exit(1);
  } finally {
    console.log('SEEDING DONE');
    await prisma.$disconnect();
  }
}

seedProducts();
