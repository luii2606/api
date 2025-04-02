use node_adso2894667;
show databases;
create table categorias (
	id int auto_increment primary key,
    nombre varchar(255) not null,
    descripcion text null,
    create_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

create table productos(
	id int auto_increment primary key,
    nombre varchar(255) not null,
    descripcion text,
    precio decimal(10,2),
    categoria_id  int,
    create_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
	foreign key (categoria_id) references categorias (id) on delete set null
    );

insert into categorias(nombre,descripcion) values ("luisa", "holaaa"),
("Draco", "Buenos dias");

insert into productos(nombre,descripcion,precio, categoria_id) values ("Manzana", "fruta", 500.00, 1),
("camisa", "prendas",1000.00, 2);

select * from categorias;
select * from productos;