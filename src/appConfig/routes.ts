export enum MAIN_ROUTES {
  HOME = "HOME",
  ABOUT = "ABOUT",
}

const mainRoutes = {
  [MAIN_ROUTES.HOME]: {
    makePath: () => "/",
  },
  [MAIN_ROUTES.ABOUT]: {
    makePath: () => "/about",
  },
};

export enum ARTICLE_ROUTES {
  ARTICLES_LIST = "ARTICLES_LIST",
  ARTICLE = "ARTICLE",
}

const articleRoutes = {
  [ARTICLE_ROUTES.ARTICLES_LIST]: {
    makePath: () => "/articles",
  },
  [ARTICLE_ROUTES.ARTICLE]: {
    makePath: ({ id }: { id: number }) => `/articles/${id}`,
  },
};

export enum LEARNING_ROUTES {
  LEARNING = "LEARNING",
}

const learningRoutes = {
  [LEARNING_ROUTES.LEARNING]: {
    makePath: () => "/learning",
  },
};

export const routes = {
  ...mainRoutes,
  ...articleRoutes,
  ...learningRoutes,
};
