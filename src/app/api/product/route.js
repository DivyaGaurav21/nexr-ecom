import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/backend/config/dbConnect';
import { Product } from '@/backend/models/product';
import { URL } from "url";
import APIFilters from '@/backend/utils/APIFilters'


//------function to crete todo--------------------//
export async function POST(request) {
    try {
        dbConnect();
        const {
            name,
            description,
            price,
            seller,
            stock,
            ratings,
            reviews,
            category,
            images,
            createdAt
        } = await request.json();
        const newProduct = new Product({
            name,
            description,
            price,
            seller,
            stock,
            ratings,
            reviews,
            category,
            images,
            createdAt
        });
        const savedProduct = await newProduct.save();
        return NextResponse.json({
            message: "Product created successfully",
            success: true,
            savedProduct
        },
            { status: 201 }
        )

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}

// export async function GET(req, res) {
//     const { searchParams } = new URL(req.url);
//     const resPerPage = 4;
//     const category = searchParams.get('category');
//     try {
//         dbConnect();
//         let products = await Product.find();
//         return NextResponse.json({
//             message: "Products",
//             success: true,
//             products
//         }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }



export async function GET(req, res) {
    const { searchParams } = new URL(req.url);
    const resPerPage = 3;

    try {
        dbConnect();

        const filters = new APIFilters(Product.find(), {
            category: searchParams.get('category'),
            keyword: searchParams.get('keyword'),
            sort: searchParams.get('sort'),
            page: searchParams.get('page'),
            rating: searchParams.get('rating')
        });

        const products = await filters.search().filter().pagination(resPerPage).execute();

        return NextResponse.json({
            message: "Products",
            success: true,
            products,
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
