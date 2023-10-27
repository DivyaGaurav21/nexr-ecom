import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/backend/config/dbConnect';
import { Product } from '@/backend/models/product';


//------function to crete todo--------------------//
export async function POST(request: NextRequest) {
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

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}

//--------------function to get all todos---------//

export async function GET(request: NextRequest) {
    try {
        dbConnect();
        const products = await Product.find();
        return NextResponse.json({
            message: "all Products",
            success: true,
            products
        },
            { status: 200 }
        )
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 501 }
        )
    }
}