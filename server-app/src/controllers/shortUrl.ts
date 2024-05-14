import express from "express";
import { urlModel } from "../model/shortUrl";
import { LooseAuthProp } from "@clerk/clerk-sdk-node";

// interface CustomRequest extends express.Request, LooseAuthProp {
//   user?: { id: string }; 
// }

    interface Request extends LooseAuthProp {
      user?: { id: string }
    }



export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
  
  try {
    const { fullUrl } = req.body;
    const userId = req.auth.userId;
    
    console.log("Request Object:", req.auth)
    const urlFound = await urlModel.find({ fullUrl, userId });
    if (urlFound.length > 0) {
      res.status(409);
      res.send(urlFound);
    } else {
      const shortUrl = await urlModel.create({ fullUrl, userId });
      res.status(201).send(shortUrl);
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }

};

export const getAllUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const userId = req.auth.userId;
    console.log( req.auth);
    
    const shortUrls = await urlModel.find({ userId }).sort({ createdAt: -1 });
    res.status(200).send(shortUrls);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

export const getUrl = async (
  req: express.Request, 
  res: express.Response
) => {
  try {
    const userId = req.auth.userId;
    const shortUrl = await urlModel.findOne({ shortUrl: req.params.id, userId });
    if (!shortUrl) {
      res.status(404).send({ message: "Full Url not found!" });
    } else {
      shortUrl.clicks++;
      shortUrl.save();
      res.redirect(`${shortUrl.fullUrl}`);
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

export const editUrl = async (
  req: express.Request,
  res: express.Response
) => {  
  try {
    const userId = req.auth.userId;
    const { id } = req.params; 
    const { shortUrl } = req.body
    const newShortUrl = await urlModel.findByIdAndUpdate({_id:id, userId,}, { shortUrl }, { new: true });

    if (!newShortUrl) {
      return res.status(404).send({ message: "URL not found!" });
    }

    res.status(200).send(newShortUrl);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

export const deleteUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const userId = req.auth.userId;
    const shortUrl = await urlModel.findByIdAndDelete({ _id: req.params.id, userId });
    if (shortUrl) {
      res.status(200).send({ message: "Requested URL succesfully deleted!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};