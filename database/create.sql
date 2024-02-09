create database pm_service;

create table pm_service.post(
	id int primary key auto_increment,
    title text not null,
    content text not null,
    created_at timestamp default now()
);