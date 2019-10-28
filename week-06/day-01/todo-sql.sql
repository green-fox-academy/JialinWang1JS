USE `tododb`;
create table IF NOT EXISTS TodoList (
	todo_id integer primary key NOT NULL auto_increment,
    todo_description text,
    todo_is_done boolean null default false
);

create table if not exists UserList (
	user_id integer primary key NOT NULL auto_increment,
    user_name text not null    
);

alter table TodoList add user_id integer;

alter table TodoList add constraint user_profile foreign key (user_id) 
references UserList(user_id) on delete cascade on update cascade;

insert into TodoList (todo_description) values ('Drink some water');
insert into userList (user_name) values ('joon');

update todolist set user_id = 1 where todo_id = 1;

alter table todolist modify todo_is_done boolean null default false;

insert into TodoList (todo_description) values ('Drink some water 2');

alter table todolist modify user_id integer not null;

update todolist set user_id = 1 where todo_id = 2;
