import React from 'react';

const BlogBodyRenderer = ({ body }) => {
  return (
    <div>
      {body.map((block, index) => {
        if (block._type === 'block') {
          if (block.style === 'h2') {
            return <h2 key={index} className="text-2xl font-bold mb-4">{block.children[0].text}</h2>;
          } else if (block.style === 'normal') {
            return <p key={index} className="mb-2">{block.children[0].text}</p>;
          }
        } else if (block._type === 'list') {
          const ListComponent = block.listItem === 'bullet' ? 'ul' : 'ol';

          return (
            <ListComponent key={index} className={block.level > 1 ? 'list-disc ml-4' : 'list-decimal'}>
              {block.children.map((listItem, listItemIndex) => (
                <li key={listItemIndex} className="mb-2">
                  {listItem.children.map((child, childIndex) => (
                    <span key={childIndex}>{child.text}</span>
                  ))}
                </li>
              ))}
            </ListComponent>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BlogBodyRenderer;