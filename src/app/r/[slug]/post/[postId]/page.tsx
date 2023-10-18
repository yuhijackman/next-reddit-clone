import { db } from "@/lib/db";
import { Post, User, Vote } from "@prisma/client";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    postId: string;
  };
}
const page = async ({ params }: PageProps) => {
  let post: (Post & { votes: Vote[]; author: User }) | null = null;

  post = await db.post.findFirst({
    where: {
      id: params.postId
    },
    include: {
      votes: true,
      author: true
    }
  });

  if (!post) return notFound();
  //   7:14:00
  return (
    <div>
      <div className="h-full flex flex-col sm:flex-row items-center sm:items-start justify-between"></div>
    </div>
  );
};

export default page;
