clave mysql 123456
entrar a la consola de mysql: sudo mysql -u root -p

proyecto_prog2
CREATE USER 'dev1_user'@'localhost' INDETIFIED BY '123456'

SELECT user, host FROM mysql.user;
GRANT ALL PRIVILEGES ON proyecto_prog2.* TO 'dev1_user'@'localhost';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'dev1_user'@'localhost';

# min 30


producto controller 134


## login:
1- instalar librerias
2- modificar base de datos
3- sistema de resgistro
4- sistema login