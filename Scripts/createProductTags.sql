INSERT INTO ProductTags(Tag) 
    SELECT '_'
    FROM dual WHERE NOT EXISTS (SELECT * FROM ProductTags WHERE Tag = '_' );

INSERT INTO ProductTags(Tag) 
    SELECT 'New'
    FROM dual WHERE NOT EXISTS (SELECT * FROM ProductTags WHERE Tag = 'New' );
	
INSERT INTO ProductTags(Tag) 
    SELECT 'Popular'
    FROM dual WHERE NOT EXISTS (SELECT * FROM ProductTags WHERE Tag = 'Popular' );

INSERT INTO ProductTags(Tag) 
    SELECT 'OutOfStock'
    FROM dual WHERE NOT EXISTS (SELECT * FROM ProductTags WHERE Tag = 'OutOfStock' );


	