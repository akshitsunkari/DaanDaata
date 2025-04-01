"use client"

import { useEffect, useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { BookmarkIcon, Heart, MessageCircle, MoreHorizontal, Repeat2, Share2 } from "lucide-react"
import Image from "next/image"

// Types for our posts
type PostAuthor = {
  name: string
  username: string
  avatar: string
}

type Post = {
  id: number
  author: PostAuthor
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
  timestamp: string
}

// Mock data generator
const generateMockPosts = (startIndex: number, count: number): Post[] => {
  const posts: Post[] = []

  for (let i = 0; i < count; i++) {
    const id = startIndex + i
    const hasImage = Math.random() > 0.3 // 70% of posts have images

    posts.push({
      id,
      author: {
        name: `User ${id % 10}`,
        username: `user${id % 10}`,
        avatar: `/placeholder.svg?height=40&width=40&text=${id % 10}`,
      },
      content: `This is post #${id} with some interesting content that people might want to read and engage with. What do you think about this topic? ${
        id % 3 === 0 ? "🔥" : id % 3 === 1 ? "✨" : "👍"
      }`,
      image: hasImage ? `/placeholder.svg?height=400&width=600&text=Post+${id}` : undefined,
      likes: Math.floor(Math.random() * 1000),
      comments: Math.floor(Math.random() * 100),
      shares: Math.floor(Math.random() * 50),
      timestamp: `${Math.floor(Math.random() * 24)}h ago`,
    })
  }

  return posts
}

// Post component
const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="mb-4 border-b border-x-0 rounded-none first:rounded-t-lg shadow-none">
      <CardHeader className="flex flex-row items-start space-y-0 gap-3 pb-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="font-semibold">{post.author.name}</span>
            <span className="text-muted-foreground ml-2">@{post.author.username}</span>
            <span className="text-muted-foreground mx-1">·</span>
            <span className="text-muted-foreground text-sm">{post.timestamp}</span>
          </div>
          <p className="text-sm mt-1">{post.content}</p>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto rounded-full h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>

      {post.image && (
        <CardContent className="px-4 py-0">
          <div className="relative rounded-lg overflow-hidden mt-2 mb-3">
            <Image
              src={post.image || "/placeholder.svg"}
              alt="Post image"
              width={600}
              height={400}
              className="w-full object-cover rounded-lg"
            />
          </div>
        </CardContent>
      )}

      <CardFooter className="px-4 py-2">
        <div className="flex justify-between w-full">
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            <Heart className="h-4 w-4" />
            <span>{post.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            <span>{post.comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            <Repeat2 className="h-4 w-4" />
            <span>{post.shares}</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <BookmarkIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Loading component
const LoadingPosts = () => {
  return (
    <div className="space-y-4 mt-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="mb-4 border-b border-x-0 rounded-none shadow-none">
          <CardHeader className="flex flex-row items-start space-y-0 gap-3 pb-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="flex flex-col flex-1">
              <Skeleton className="h-5 w-40 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-1" />
            </div>
          </CardHeader>
          <CardContent className="px-4 py-0">
            <Skeleton className="h-64 w-full rounded-lg" />
          </CardContent>
          <CardFooter className="px-4 py-2">
            <div className="flex justify-between w-full">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

// Main component
export default function SocialFeed() {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement>(null)
  const postsPerPage = 5

  // Load initial posts
  useEffect(() => {
    setPosts(generateMockPosts(0, postsPerPage))
  }, [])

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]
        if (target.isIntersecting && !loading) {
          loadMorePosts()
        }
      },
      { threshold: 0.1 },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [loading])

  // Load more posts function
  const loadMorePosts = () => {
    setLoading(true)

    // Simulate network delay
    setTimeout(() => {
      const newPosts = generateMockPosts(page * postsPerPage, postsPerPage)
      setPosts((prevPosts) => [...prevPosts, ...newPosts])
      setPage((prevPage) => prevPage + 1)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Feed</h1>
      </div>

      <div className="space-y-0">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div ref={loaderRef} className="py-4">
        {loading && <LoadingPosts />}
      </div>
    </div>
  )
}

