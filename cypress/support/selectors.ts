const selectors = {

  login: {
    username: '[data-testid="login-username"]',
    password: '[data-testid="login-password"]',
    rememberMeCheckbox: '[data-testid="remember-me"]',
    loginBtn: '[data-testid="login-submit"]',
    submit: "#login-btn",       
    errorMessage: ".error-text" 
  },

  board: {
    createBoardButton: '[data-testid="create-board-btn"]',
    boardNameInput: '[data-testid="board-name-input"]',
    createSubmit: '[data-testid="create-board-submit"]',
    boardTitle: '[data-testid="board-title-display"]',
    boardTitleInput: '[data-testid="board-title-edit"]',
    boardMenu: '[data-testid="board-menu"]',
    archiveButton: '[data-testid="archive-board"]',
    columnTitle: ".board-column-title",
    cardTitle: ".board-card-title",  
    editButton: ".card-edit-btn"

  },
  dashboard: {
    header: "h1.dashboard-title" 
  }
};

export default selectors;
