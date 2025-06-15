<?php

namespace App\Enums\Branch;

enum MaintenanceStatus: string
{
    case Pending = 'PENDING';
    case InProgress = 'IN_PROGRESS';
    case Completed = 'COMPLETED';
    case Cancelled = 'CANCELLED';
    case Done = 'DONE';
}