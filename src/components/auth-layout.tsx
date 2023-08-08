import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { COOKIE_NAME } from "../../utils/constants";
import { getCookie } from "cookies-next";
import Loading from "./loading";

interface UserResponse {
  accepted: string | null;
  error: AxiosError | null;
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { push } = useRouter();

  useEffect(() => {
    const cookies = getCookie(COOKIE_NAME) || "";
    (async () => {
      const { accepted, error } = await getVerify(cookies.toString());
      if (error) {
        push("/");
        return;
      }

      setIsSuccess(true);
    })();
  }, [push]);

  if (!isSuccess) {
    return (
      <div className="max-height bg-dark">
        <section className="bg-dark">
          <Loading />
        </section>
      </div>
    )
  }

  return (
    <>
      {children}
    </>
  );
}

async function getVerify(cookie: string): Promise<UserResponse> {
  try {
    const { data } = await axios.post("/api/auth/", { cookie });

    return {
      accepted: data,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;

    return {
      accepted: null,
      error,
    };
  }
}