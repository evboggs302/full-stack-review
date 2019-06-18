drop table is exists messages;
drop table if exists users;

-- 

create table users (
    user_id serial primary key,
    username varchar not null,
    email text not null,
    password text not null
);

-- 

insert into users(username, email, password)
values
('Evan', 'evan@evan.com', 'evanevan'),
select * from users;

-- 

create table messages (
    message_id serial,
    message text not null,
    user_id int not null references users(user_id),
    time_entered date default now()
);

-- 

insert into messages (message, user_id)
values
('Sup! this is Evan', 1),
('Sup, Evan! this is joe', 2),
('Need to go grocery shoppin?', 2);
select * from meassages;

-- 

select u.user_id, username, email, message_id, time_entered from users u
join messages m on (u.user_id = m.user_id);