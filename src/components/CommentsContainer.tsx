import CommentsList from "./CommentsList";

interface CommentsDataProps {
  name: string;
  comment: string;
  replies: CommentType[];
}
interface CommentType {
  name: string;
  comment: string;
  replies: CommentType[];
}
const commentsData: CommentType[] = [
  {
    name: "Irfan Fattekhan",
    comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
    replies: [],
  },
  {
    name: "Irfan Fattekhan",
    comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
    replies: [
      {
        name: "Irfan Fattekhan",
        comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
        replies: [],
      },
      {
        name: "Irfan Fattekhan",
        comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
        replies: [
          {
            name: "Irfan Fattekhan",
            comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
            replies: [
              {
                name: "Irfan Fattekhan",
                comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
                replies: [
                  {
                    name: "Irfan Fattekhan",
                    comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
                    replies: [
                      {
                        name: "Irfan Fattekhan",
                        comment:
                          "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
                        replies: [
                          {
                            name: "Irfan Fattekhan",
                            comment:
                              "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
                            replies: [],
                          },
                        ],
                      },
                      {
                        name: "Irfan Fattekhan",
                        comment:
                          "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Irfan Fattekhan",
    comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
    replies: [
      {
        name: "Irfan Fattekhan",
        comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
        replies: [],
      },
      {
        name: "Irfan Fattekhan",
        comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
        replies: [
          {
            name: "Irfan Fattekhan",
            comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
            replies: [
              {
                name: "Irfan Fattekhan",
                comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
                replies: [
                  {
                    name: "Irfan Fattekhan",
                    comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
                    replies: [
                      {
                        name: "Irfan Fattekhan",
                        comment:
                          "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Irfan Fattekhan",
            comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
            replies: [],
          },
        ],
      },
      {
        name: "Irfan Fattekhan",
        comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
        replies: [],
      },
    ],
  },
  {
    name: "Irfan Fattekhan",
    comment: "lorem ipsom lorem ipsom lorem ipsom lorem ipsom ",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="p-2 w-[76rem]">
      <h1 className="font-bold text-2xl">Comments : </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
