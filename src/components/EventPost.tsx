import { format } from 'date-fns';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Using React 17+ JSX transform; no default import needed

interface EventPostProps {
  id: number;
  title: string;
  category?: string;
  excerpt?: string;
  content: string;
  author: string;
  image_url: string;
  publication_date: string;
  className?: string;
  isPreview?: boolean;
  onClick?: () => void;
}

const EventPost = ({
  id,
  title,
  category,
  excerpt,
  content,
  author,
  image_url,
  publication_date,
  className = '',
  isPreview = false,
  onClick,
}: EventPostProps) => {
  // Format the publication date
  const formattedDate = publication_date 
    ? format(new Date(publication_date), 'MMMM dd, yyyy')
    : '';

  return (
    <Card 
      className={`overflow-hidden ${className} ${isPreview ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
      onClick={isPreview && onClick ? onClick : undefined}
    >
      {image_url && (
        <div className="relative h-52 w-full overflow-hidden">
          <img
            src={image_url}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            {category && (
              <Badge variant="outline" className="mb-2">
                {category}
              </Badge>
            )}
            <h2 className={`font-bold ${isPreview ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
              {title}
            </h2>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {isPreview ? (
          <p className="text-gray-600">{excerpt || content.substring(0, 150) + '...'}</p>
        ) : (
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none" 
               dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </CardContent>
      
      <CardFooter className="pt-0 text-sm text-gray-500 flex justify-between">
        <span>{author}</span>
        <span>{formattedDate}</span>
      </CardFooter>
    </Card>
  );
};

export default EventPost;
