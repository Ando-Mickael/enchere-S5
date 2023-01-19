create sequence seq_Admin;

create sequence seq_Utilisateur;

create sequence seq_Produit;

create sequence seq_Categorie;

create sequence seq_Photo;

create SEQUENCE seq_Enchere;

create SEQUENCE seq_RechargeCompte;

create SEQUENCE seq_Token;

create SEQUENCE seq_ResultatEnchere;

insert into
    Admin
values
    (
        CONCAT('Admin', nextval('seq_Admin')),
        'admin@gmail.com',
        'admin'
    );

insert into
    Utilisateur
values
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Martin',
        'Martin',
        'koto@gmail.com',
        '2222'
    ),
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Koto',
        'Koto',
        'bao@gmail.com',
        '3333'
    ),
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Bob',
        'Bob',
        'lova@gmail.com',
        '4444'
    ),
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Raozy',
        'raozy',
        'raozy@gmail.com',
        '5555'
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
    );

insert into
    Produit
values
    (
        CONCAT('Produit', nextval('seq_Produit')),
        'Tableau',
        'objet de valeur',
        100000,
        'Utilisateur1',
        'Categorie1'
    ),
    (
        CONCAT('Produit', nextval('seq_Produit')),
        'Table',
        'table a manger en marbre',
        60000,
        'Utilisateur2',
        'Categorie2'
    ),
    (
        CONCAT('Produit', nextval('seq_Produit')),
        'Smartphone',
        'samsung A7 2018',
        500000,
        'Utilisateur3',
        'Categorie3'
    ),
    (
        CONCAT('Produit', nextval('seq_Produit')),
        'Chaussure',
        'occasion de france',
        30000,
        'Utilisateur4',
        'Categorie4'
    ),
    (
        CONCAT('Produit', nextval('seq_Produit')),
        'Batterie',
        'neuve 80A',
        20000,
        'Utilisateur1',
        'Categorie3'
    );

insert into
    Photo
values
    (
        concat('Photo', nextval('seq_Photo')),
        'tableau.jpg',
        'Produit1'
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        'table.jpg',
        'Produit2'
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        'smartphone.jpg',
        'Produit3'
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        'chaussure.jpg',
        'Produit4'
    ),
    (
        concat('Photo', nextval('seq_Photo')),
        'batterie.jpg',
        'Produit5'
    );

insert into
    Enchere
values
    (
        concat('Enchere', nextval('seq_Enchere')),
        default,
        '24:00:00',
        110000,
        default,
        'Produit1'
    ),
    (
        concat('Enchere', nextval('seq_Enchere')),
        default,
        '24:00:00',
        70000,
        default,
        'Produit2'
    ),
    (
        concat('Enchere', nextval('seq_Enchere')),
        default,
        '24:00:00',
        500000,
        default,
        'Produit3'
    ),
    (
        concat('Enchere', nextval('seq_Enchere')),
        default,
        '24:00:00',
        35000,
        default,
        'Produit4'
    ),
    (
        concat('Enchere', nextval('seq_Enchere')),
        default,
        '24:00:00',
        30000,
        default,
        'Produit5'
    );

insert into
    RechargeCompte
values
    (
        concat('RechargeCompte', nextval('seq_RechargeCompte')),
        200000,
        default,
        'Utilisateur2'
    ),
    (
        concat('RechargeCompte', nextval('seq_RechargeCompte')),
        400000,
        default,
        'Utilisateur3'
    ),
    (
        concat('RechargeCompte', nextval('seq_RechargeCompte')),
        600000,
        default,
        'Utilisateur2'
    ),
    (
        concat('RechargeCompte', nextval('seq_RechargeCompte')),
        250000,
        default,
        'Utilisateur4'
    );

insert into
    Config
values
    ('tauxCommission', '10');