import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1 className="text-3xl">
        {t("NotFound.Intro")}
        <Link to="/" className="font-bold">
          {t("NotFound.Link")}
        </Link>
        {t("NotFound.Outro")}
      </h1>
    </main>
  );
};
export default NotFound;
