curl -X POST http://localhost:8000/api/bookings/ \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project_id": "660e8400-e29b-41d4-a716-446655440000",
    "date": "2026-06-15",
    "time": "14:00:00",
    "duration": 480,
    "location": "Downtown Venue"
  }'
