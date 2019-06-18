insert into users(username, email, password)
values
($1, $2, $3);

select username, email from users
where email = $2;