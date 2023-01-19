CREATE TABLE Admin (
  id varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  mdp varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Categorie (
  id varchar(255) NOT NULL,
  intitule varchar(255) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE Config (
  cle varchar(255) NOT NULL UNIQUE,
  valeur varchar(255)
);

CREATE TABLE Enchere (
  id varchar(255) NOT NULL,
  dateDebut timestamp default now(),
  duree time,
  prixMin float4 NOT NULL,
  status int4 DEFAULT 0,
  Produitid varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Historique (
  id varchar(255) NOT NULL,
  dateEnchere timestamp default now(),
  prix float4,
  Utilisateurid varchar(255) NOT NULL,
  Enchereid varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Photo (
  id varchar(255) NOT NULL,
  image varchar(255),
  Produitid varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Produit (
  id varchar(255) NOT NULL,
  nom varchar(255),
  descri text,
  prix float4,
  ProprietaireId varchar(255) NOT NULL,
  CategorieId varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE RechargeCompte (
  id varchar(255) NOT NULL,
  montant float4,
  estValide int4 default 0,
  Utilisateurid varchar(255) NOT NULL,
  dateDemande timestamp default now(),
  PRIMARY KEY (id)
);

CREATE TABLE ResultatEnchere (
  id varchar(255) NOT NULL,
  prixVente float4,
  GagnantId varchar(255) NOT NULL,
  Enchereid varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Token (
  id varchar(255) NOT NULL,
  contenu varchar(255) NOT NULL UNIQUE,
  dateExpiration timestamp default now() + interval '10 minutes',
  Utilisateurid varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Utilisateur (
  id varchar(255) NOT NULL,
  nom varchar(255) NOT NULL,
  pseudo varchar(255) NOT NULL UNIQUE,
  email varchar(255) NOT NULL UNIQUE,
  mdp varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE
  ResultatEnchere
ADD
  FOREIGN KEY (GagnantId) REFERENCES Utilisateur (id);

ALTER TABLE
  ResultatEnchere
ADD
  FOREIGN KEY (Enchereid) REFERENCES Enchere (id);

ALTER TABLE
  Enchere
ADD
  FOREIGN KEY (Produitid) REFERENCES Produit (id);

ALTER TABLE
  RechargeCompte
ADD
  FOREIGN KEY (Utilisateurid) REFERENCES Utilisateur (id);

ALTER TABLE
  Produit
ADD
  FOREIGN KEY (ProprietaireId) REFERENCES Utilisateur (id);

ALTER TABLE
  Produit
ADD
  FOREIGN KEY (CategorieId) REFERENCES Categorie (id);

ALTER TABLE
  Historique
ADD
  FOREIGN KEY (Utilisateurid) REFERENCES Utilisateur (id);

ALTER TABLE
  Historique
ADD
  FOREIGN KEY (Enchereid) REFERENCES Enchere (id);

ALTER TABLE
  Photo
ADD
  FOREIGN KEY (Produitid) REFERENCES Produit (id);

ALTER TABLE
  Token
ADD
  FOREIGN KEY (Utilisateurid) REFERENCES Utilisateur (id);