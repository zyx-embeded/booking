# Project Title

Booking API

## Model

### User

```
{
    id: ObjectId,
    name: String
}
```

### Table

```
{   id: ObjectId ,
    name : String
}
```

### Booking

```
{   id: ObjectId ,
    userId: ObjectId ,
    tableId: ObjectId,
    startTime: Date,
    endTime: Date
}
```

## Feature
    Reserve
