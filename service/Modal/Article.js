const Article = {
    name: 'Article',
    primaryKey: 'id',
    properties: {
      id: { type: 'int' },
      name: { type: 'string' },
      slug: { type: 'string' },
      description: { type: 'string' },
      body: { type: 'string' },
      cat_id: { type: 'int' },
    }
  };
  
  export default Article;