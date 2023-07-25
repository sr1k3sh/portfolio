import React, { useEffect } from 'react'
import { GET_INSTA_BLOGS, clientInsta } from 'src/utils/config'

type Props = {}

export default function test({}: Props) {

  useEffect(() => {
    (async()=>{
      const test = await clientInsta.query({
        query: GET_INSTA_BLOGS,
        // query_hash: ,
        variables: {
          "id":"353206713798475",
          "first":12,
          "after":"EAALgzmwZC2yQBAMgVz5R25TAuv3MUxTf5p9Wi2nJvizrByWAXZAQaYiZBadwZARpm5U7NuBfDvYGULs4N4boJ3ahGC1ltHy6bROEsYIYGYPdYPcQbCvZBqUWCuIDYTuNtW9NKNYjwJxZCZCtBPqJ7SDr7ReIt4QHyEUfpEr6UPUt9a1Ty0TIvCdFyxkqbmgLBlu6QZCuN8nP5kjPHvFJGwNfnxOZC4aeYOjmIjESmr0vHm3YZAsNzZArkOxXUWFHZBI5d94ZD"
        }
      })

      console.log(test)
    })()
  },[])
  return (
    <div>test</div>
  )
}