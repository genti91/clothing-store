import Head from "next/head";

export default function Title({title}:any) {
    if (title) {
        title = " | " + title;
    }
  return (
    <Head>
        <title>House of Fashion{title}</title>
    </Head>
  )
}