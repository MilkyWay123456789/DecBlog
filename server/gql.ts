export function discussionGQL(ghDiscussionCategoryId: string | undefined) {
  return `{
        repository(owner: "MilkyWay123456789", name: "DevBlog") {
            discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
              nodes {
                title
                url
                number
                bodyHTML
                bodyText
                createdAt
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
                 labels(first: 100) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
    }`
}

//Single post
export function discussionDetailGQL(postId: number | undefined) {
  return `{
    repository(owner: "MilkyWay123456789", name: "DevBlog") {
      discussion(number:${postId}) {
          title
          bodyHTML
          createdAt
          author {
            login
            url
            avatarUrl
          }
      }
    }
  }`
}