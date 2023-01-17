import BlogHeader from "@/components/BlogHeader"
import { getBlogsDetail } from "@/server/blogs"
import { BlogDetail } from "@/types/blog"
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import parser from "html-react-parser"
import detail from "./id.module.css"

const BlogPost: NextPage = ({ blogData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { author, bodyHTML, createdAt, title } = blogData
    return (
        <section className="layout">
            <div className="max-w-[50%]">
                <h1 className="text-center my-10 text-[2rem] font-bold">{title}</h1>
                <div className="flex justify-center mb-4">
                    <BlogHeader
                        createdAt={createdAt}
                        author={author}
                    />
                </div>
                <div className={`${detail.html} flex flex-col`}>
                    {parser(bodyHTML)}
                </div>
            </div>
        </section>
    )
}

export default BlogPost

export const getServerSideProps: GetServerSideProps = async (context) => {
    const route: string[] | string | undefined = context.query.id
    const id = Number(route)
    let blogDetail = await getBlogsDetail(id)
    return {
        props: {
            blogData: blogDetail
        }
    }
}