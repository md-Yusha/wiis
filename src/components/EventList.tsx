import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EventPost from './EventPost';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface EventPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  image_url: string;
  publication_date: string;
  created_at: string;
}

interface EventListProps {
  limit?: number;
  category?: string;
  columns?: 1 | 2 | 3;
}

const EventList: React.FC<EventListProps> = ({ 
  limit,
  category,
  columns = 2
}) => {
  const [posts, setPosts] = useState<EventPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/Event');
        let filteredPosts = response.data;
        
        // Filter by category if provided
        if (category) {
          filteredPosts = filteredPosts.filter((post: EventPost) => 
            post.category.toLowerCase() === category.toLowerCase()
          );
        }
        
        // Apply limit if provided
        if (limit && limit > 0) {
          filteredPosts = filteredPosts.slice(0, limit);
        }
        
        setPosts(filteredPosts);
      } catch (err) {
        console.error('Error fetching Event posts:', err);
        setError('Failed to load Event posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category, limit]);

  const handlePostClick = (id: number) => {
    navigate(`/Event/${id}`);
  };

  // Determine grid columns class
  const getColumnsClass = (): string => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      default: return 'grid-cols-1 md:grid-cols-2';
    }
  };

  if (loading) {
    return (
      <div className={`grid ${getColumnsClass()} gap-8`}>
        {[...Array(limit || 4)].map((_, index) => (
          <Card key={index}>
            <Skeleton className="h-48 w-full rounded-t-lg" />
            <CardHeader>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-8 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        {category 
          ? `No Event posts found in the "${category}" category.` 
          : 'No Event posts found.'}
      </div>
    );
  }

  return (
    <div className={`grid ${getColumnsClass()} gap-8`}>
      {posts.map((post) => (
        <EventPost
          key={post.id}
          id={post.id}
          title={post.title}
          category={post.category}
          excerpt={post.excerpt}
          content={post.content}
          author={post.author}
          image_url={post.image_url}
          publication_date={post.publication_date || post.created_at}
          isPreview={true}
          onClick={() => handlePostClick(post.id)}
        />
      ))}
    </div>
  );
};

export default EventList;
