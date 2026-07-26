curl -X POST http://localhost:8000/api/galleries/ \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project_id": "660e8400-e29b-41d4-a716-446655440000",
    "gallery_name": "Reception Photos",
    "picture_count": 89,
    "is_visible": true,
    "url": "https://example.com/galleries/reception"
  }'
