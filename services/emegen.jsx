import axios from "axios";

export const getServices = async () =>
   axios.get("https://api.emegen.com.tr/users/alpaslan-bugday-insaat/services");

export const getProjects = async () =>
   axios.get("https://api.emegen.com.tr/users/alpaslan-bugday-insaat/tenders");

export const getProjectById = async (id) =>
   axios.get(
      `https://api.emegen.com.tr/tenders/${id}`
   );
