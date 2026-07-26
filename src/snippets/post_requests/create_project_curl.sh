curl -X POST http://localhost:8000/api/projects/ \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project_name": "Birthday Party",
    "project_type": "party",
    "client_id": "550e8400-e29b-41d4-a716-446655440002"
  }'
