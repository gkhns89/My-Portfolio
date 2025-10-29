import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quotesData } from "../../Sources/Data/QuotesData";
import { useEffect } from "react";


const QuotesList = () => {
  const { companyKey } = useParams();
  const navigate = useNavigate();
  const company = quotesData[companyKey];

  useEffect(() => {
    const authorizedKey = sessionStorage.getItem("authorizedCompany");

    // Erişim kodu yoksa veya URL'deki key ile eşleşmiyorsa -> login sayfasına yönlendir
    if (!authorizedKey || authorizedKey !== companyKey || !company) {
      navigate("/quotes-login", { replace: true });
    }
  }, [companyKey, company, navigate]);

  if (!company) {
    // company undefined ise component render edilmeden boş dön
    return null;
  }

  const getStatusBadge = (status) => {
    const badges = {
      active: {
        bg: "bg-green-100 dark:bg-green-900/30",
        text: "text-green-800 dark:text-green-300",
        label: "Aktif",
      },
      pending: {
        bg: "bg-yellow-100 dark:bg-yellow-900/30",
        text: "text-yellow-800 dark:text-yellow-300",
        label: "Beklemede",
      },
      completed: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-800 dark:text-blue-300",
        label: "Tamamlandı",
      },
      expired: {
        bg: "bg-gray-100 dark:bg-gray-700",
        text: "text-gray-800 dark:text-gray-300",
        label: "Süresi Doldu",
      },
    };

    const badge = badges[status] || badges.active;

    
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${badge.bg} ${badge.text}`}
      >
        {badge.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {company.companyName}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Teklifleriniz aşağıda listelenmektedir
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Erişim Kodu
              </div>
              <code className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-mono text-gray-800 dark:text-gray-200">
                ••••-••••-••••-••••
              </code>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>
                Toplam {company.quotes.length} teklif
              </span>
            </div>
          </div>
        </div>

        {/* Quotes List */}
        <div className="space-y-4">
          {company.quotes.map((quote) => (
            <div
              key={quote.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {quote.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{quote.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <span>Teklif #{quote.id}</span>
                      </div>
                    </div>
                  </div>
                  <div>{getStatusBadge(quote.status)}</div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  
                  {/* Aynı sekmede aç */}
                  <button
                    onClick={() => window.location.href = quote.path}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 font-semibold rounded-lg transition-all duration-200"
                  >
                    <span>Teklifi Görüntüle</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>Sorularınız mı var?</p>
              <a
                href="mailto:dev@gokhan.codes"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                dev@gokhan.codes
              </a>
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem("authorizedCompany");
                navigate("/quotes-login");
              }}
              className="px-6 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesList;