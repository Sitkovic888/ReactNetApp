import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  addPortfolioApi,
  deletePortfolioApi,
  getPortfolioApi,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";
import AddPortfolio from "../../Components/Portfolio/AddPortfolio/AddPortfolio";

type Props = {};

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfoliaValues] = useState<PortfolioGet[] | null>(
    []
  );
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  useEffect(() => getPortfolio(), []);

  const getPortfolio = () => {
    getPortfolioApi()
      .then((res) => {
        const portfolio = res?.data;
        if (portfolio) {
          setPortfoliaValues(portfolio);
        }
      })
      .catch((e) => toast.warning("Failed to get the portfolio."));
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();

    const symbol = e.target[0].value;
    addPortfolioApi(symbol)
      .then((res) => {
        const status = res?.status;
        if (status === 204) {
          toast.success("Stock is added to the portfolio.");
          getPortfolio();
        }
      })
      .catch((e) => toast.warning("Failed to add a portfolio."));
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    deletePortfolioApi(e.target[0].value)
      .then((res) => {
        const status = res?.status;
        if (status === 200) {
          toast.success("Stock is deleted from portfolio.");
          getPortfolio();
        }
      })
      .catch((e) =>
        toast.warning("Failed to delete the stock from portfolio.")
      );
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result == "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }

    console.log(searchResult);
  };

  return (
    <>
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <ListPortfolio
        portfolioValues={portfolioValues!}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <h1>{serverError}</h1>}
    </>
  );
};

export default SearchPage;
