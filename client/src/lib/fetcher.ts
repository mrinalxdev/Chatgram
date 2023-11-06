import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function handleSubmit(
  e: any,
  router: AppRouterInstance,
  avatarId: string
) {
  e.preventDefault();
  try {
    await fetch("/auth", {
      method: "POST",
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        imageId: `https://robohash.org/${avatarId}.png`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/chat");
  } catch (err) {
    console.log(err);
  }
}

export async function fetchUser(
  cookie: { user?: any },
  setUser: { (user: any): void; (arg0: any): void }
) {
  const accessToken = cookie.user;
  const response = await fetch("/user", {
    method: "GET",
    headers: {
      Authorization: `${accessToken}`,
    },
  });
  const user = await response.json();
  setUser(user[0]);
}
