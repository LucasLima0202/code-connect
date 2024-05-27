import db from "../../../../../../prisma/migrations/db"

export async function GET (_request, { params }) {
    const replies = await db.comment.findMany({
        where: {
            parentId: parseInt(params.id)
        },
        include: {
            author: true
        }
    })
    return Response.json(replies)
}


