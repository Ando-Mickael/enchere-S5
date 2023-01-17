insert into
    Personne
values
(
        CONCAT('Personne', nextval('seq_Personne')),
        'admin@gmail.com',
        'admin'
    ),
    (
        CONCAT('Personne', nextval('seq_Personne')),
        'koto@gmail.com',
        '2222'
    ),
    (
        CONCAT('Personne', nextval('seq_Personne')),
        'bao@gmail.com',
        '3333'
    ),
    (
        CONCAT('Personne', nextval('seq_Personne')),
        'lova@gmail.com',
        '4444'
    ),
    (
        CONCAT('Personne', nextval('seq_Personne')),
        'raozy@gmail.com',
        '5555'
    );

insert into
    Admin(id, Personneid)
values
    (CONCAT('Admin', nextval('seq_Admin')), 'perso1');

insert into
    Utilisateur
values
(
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Martin',
        'Martin',
        'perso2'
    ),
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Koto',
        'Koto',
        'perso3'
    ),
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Bob',
        'Bob',
        'perso4'
    ),
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Raozy',
        'raozy',
        'perso5'
    );

insert into
    Produit
values
(
        CONCAT('Produit', nextval('seq_Produit')),
        'Tableau',
        'objet de valeur',
        100000,
        'Proprio1',
        'Catego1'
    ),
    (
        CONCAT('Produit', nextval('seq_Produit')),
        'Table',
        'table a manger en marbre',
        60000,
        'Proprio2',
        'Catego2'
    ),
    (
        CONCAT('Produit', nextval('seq_Produit')),
        'Smartphone',
        'samsung A7 2018',
        500000,
        'Proprio3',
        'Catego3'
    ),
    (
        CONCAT('Produit', nextval('seq_Produit')),
        'Chaussure',
        'occasion de france',
        30000,
        'Proprio4',
        'Catego4'
    ),
    (
        CONCAT('Produit', nextval('seq_Produit')),
        'Batterie',
        'neuve 80A',
        20000,
        'Proprio5',
        'Catego5'
    );

insert into
    Categorie
values
    (
        concat('Categorie', nextval('seq_Categorie')),
        'oeuvre'
    ),
    (
        concat('Categorie', nextval('seq_Categorie')),
        'meuble'
    ),
    (
        concat('Categorie', nextval('seq_Categorie')),
        'technologie'
    ),
    (
        concat('Categorie', nextval('seq_Categorie')),
        'fashion'
    ),
    (
        concat('Categorie', nextval('seq_Categorie')),
        'technologie'
    );

insert into
    Photo
values
(
        concat('Photo', nextval('seq_Photo')),
        'tableau.jpg',
        'produit1'
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        'table.jpg',
        'produit2'
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        'smartphone.jpg',
        'produit3'
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        'chaussure.jpg',
        'produit4'
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        'batterie.jpg',
        'produit5'
    );

insert into
    Enchere
values
('24:00:00', default, default, 100000),
    ('24:00:00', default, default, 60000),
    ('24:00:00', default, default, 500000),
    ('24:00:00', default, default, 30000);

insert into
    ResultatEnchere
values
    (500000),
    (150000);

insert into
    RechargeCompte
values
(
        concat('Photo', nextval('seq_Photo')),
        200000,
        default
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        400000,
        default
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        600000,
        default
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        250000,
        default
    );

insert into
    Config
values
    ('tauxCommission', '10'),
    ('tokenvalid', '10');