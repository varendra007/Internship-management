import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

conn = mysql.connector.connect(
    host = "sql",
    port = "3306",
    user = "root",
    password = "MySQLPassword@123",
    database = "company"
)
