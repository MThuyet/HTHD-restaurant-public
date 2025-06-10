<?php

namespace App\Enums\Branch;

enum TableStatus: string
{
    case Empty = 'EMPTY';
    case Occupied = 'OCCUPIED'; 
    case Reserved = 'RESERVED';
    case Cleaning = 'CLEANING';
    case Maintenance = 'MAINTENANCE';
    case Unavailable = 'UNAVAILABLE';  
}