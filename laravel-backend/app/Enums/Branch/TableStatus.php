<?php

namespace App\Branch\Enums;

enum TableStatus: string
{
    case Empty = 'EMPTY';
    case Occupied = 'OCCUPIED'; 
    case Reserved = 'RESERVED';
    case Cleaning = 'CLEANING';
    case Maintenance = 'MAINTENANCE';
    case Unavailable = 'UNAVAILABLE';  
}