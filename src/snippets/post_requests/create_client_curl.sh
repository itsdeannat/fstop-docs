curl -X POST http://localhost:8000/api/clients/ \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Alice",
    "last_name": "Johnson",
    "city": "Cincinnati",
    "state": "OH",
    "zip_code": "45202",
    "email": "alice.johnson@example.com",
    "phone_number": "+12161239999"
  }'
