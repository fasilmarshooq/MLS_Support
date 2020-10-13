INSERT INTO ProductCategories(Category, Label) 
    SELECT 'HandloomSilks','Handloom Silks'
    FROM dual WHERE NOT EXISTS (SELECT * FROM ProductCategories WHERE Category = 'HandloomSilks' );

INSERT INTO ProductCategories(Category, Label) 
    SELECT 'SilkCotton','Silk Cotton'
    FROM dual WHERE NOT EXISTS (SELECT * FROM ProductCategories WHERE Category = 'SilkCotton' );
	
INSERT INTO ProductCategories(Category, Label) 
    SELECT 'PureCotton','Pure Cotton'
    FROM dual WHERE NOT EXISTS (SELECT * FROM ProductCategories WHERE Category = 'PureCotton' );


	