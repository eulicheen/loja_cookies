DROP DATABASE IF EXISTS cookies;
CREATE DATABASE cookies;
\c cookies;


-- DROP TABLE estoque;


CREATE TABLE estoque(
    id SERIAL PRIMARY KEY,
    nome_produto VARCHAR(50) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0,
    preco FLOAT
);


INSERT INTO estoque(nome_produto, quantidade, preco)
VALUES

-- COOKIES
('Cookie Tradicional', '20', '25.00'),
('Cookie Chocolate', '20', '25.00'),
('Cookie Nutella', '20', '25.00'),
('Cookie Ninho', '20', '25.00'),
('Cookie Ferrero Rocher', '20', '25.00'),
('Cookie Red Valvet', '20', '25.00'),

-- ÁGUAS
('Água sem gás', '100', '3.00'),
('Água com gás', '100', '3.00'),

-- CAFÉS
('Café expresso', '70', '5.00'),
('Café com latte', '70', '6.00'),
('Cappuccino', '70', '9.00'),

-- SUCOS
('Suco de Laranja', '50', '4.00'),
('Suco de Uva', '50', '4.00'),
('Suco de Abacaxi', '50', '4.00'),
('Suco de Maçã', '50', '4.00'),

-- REFRIGERANTES
('Coca-Cola Lata', '50', '6.00'),
('Coca-Cola Zero Lata', '50', '6.00'),
('Guaraná Lata', '50', '6.00'),
('Guaraná Zero Lata', '50', '6.00'),
('Sprite Lata', '50', '6.00'),
('Sprite Zero Lata', '50', '6.00');