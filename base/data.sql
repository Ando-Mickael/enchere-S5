create sequence seq_Personne;

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
    (
        CONCAT('Admin', nextval('seq_Admin')),
        'Personne1'
    );

insert into
    Utilisateur
values
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Martin',
        'Martin',
        'Personne2'
    ),
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Koto',
        'Koto',
        'Personne3'
    ),
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Bob',
        'Bob',
        'Personne4'
    ),
    (
        CONCAT('Utilisateur', nextval('seq_Utilisateur')),
        'Raozy',
        'raozy',
        'Personne5'
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
        'Utilisateur2',
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
        'Utilisateur3',
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
    ('tauxCommission', '10'),
    ('tokenValid', '10');
