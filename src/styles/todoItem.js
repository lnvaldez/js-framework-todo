export const styles = {
  listItem: {
    margin: "1rem 0",
    padding: "1rem",
    background: "var(--card-background-color)",
    borderRadius: "var(--border-radius)",
    boxShadow: "var(--card-box-shadow)",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr auto auto",
    gap: "1rem",
    alignItems: "center",
  },
  todoText: {
    cursor: "pointer",
  },
  button: {
    margin: 0,
  },
  deleteButton: {
    margin: 0,
    "--background-color": "var(--del-color)",
  },
};
