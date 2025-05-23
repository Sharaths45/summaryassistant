export class Todo {
  constructor(id, title, description, completed, createdAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = createdAt;
  }

  static fromJson(json) {
    return new Todo(
      json._id,
      json.title,
      json.description,
      json.completed,
      json.createdAt
    );
  }
}