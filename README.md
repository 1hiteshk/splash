### Spam Filtering

- A spam filtering system is software used to identify and filter out spam emails from a user’s inbox. It uses a set of rules or criteria to determine which emails are considered spam and will either delete them outright or move them to a separate folder. Many email providers now have some form of spam filtering.

- There are many different ways to design a spam filtering system, but one common approach is to use machine learning algorithms. These algorithms can be trained on data sets of known and non-spam emails and then used to classify new emails.

## Types of Spam Filtering System

1. **Manual filtering**: The user manually checks each email for spam by reading.
   A user can mark a mail as spam and that spam mail can be stored in emails.csv, that contains spam mails and further incoming mails like that or from that source are considered as spam.

2. **Bayesian Filters**: Bayesian filters use a statistical approach to identify spam messages. They analyze the content of emails and compare it to a database of known spam messages.

3. **Blacklist Filters**: Blacklist filters work by comparing the sender of an email against a list of known spammers. If the sender is on the list, their email is automatically considered spam and is blocked accordingly.

4. **Content-Based Filters**: Content-based filters examine the actual content of an email and look for specific keywords or patterns typically associated with spam messages. If these keywords or patterns are found, the email is flagged as potentially spam and subjected to further scrutiny.

5. **Heuristic Filters**: Heuristic filters use various criteria to identify spam messages. This can include things like examining the headers of an email to see if they look suspicious, checking for common misspellings often used by spammers, or looking for other red flags that might indicate that an email is a spam.

6. **Automatic filtering with thresholds**: A program that assigns a score to an incoming message based on certain criteria and if the specific word counts hit more than the threshold value it is considered as spam.

## 1 How To Design A Spam Filtering System with Machine Learning Algorithm

- Link to blog :- [https://towardsdatascience.com/email-spam-detection-1-2-b0e06a5c0472](https://towardsdatascience.com/email-spam-detection-1-2-b0e06a5c0472)

## 2 Build a Spam Filter, using NLP algorithms(Python)

- Link to blog :- https://new.pythonforengineers.com/blog/build-a-spam-filter/

- To detect spam emails using NLP : Preprocess the email by tokenizing, removing stop words, and converting to lowercase. Extract relevant features like word frequency and keywords. Prepare a labeled dataset to train a machine learning model. Select an algorithm like Naive Bayes or SVM. Train the model using the dataset and evaluate its performance. Set a threshold for classifying emails as spam. Deploy the model to classify new emails based on the threshold. Using NLP and ML, you can develop an effective spam detection system to enhance email security.

## 3 Email Spam Classification, using Dataset CSV

- Link to blog :- [https://www.kaggle.com/datasets/balaka18/email-spam-classification-dataset-csv/data](https://www.kaggle.com/datasets/balaka18/email-spam-classification-dataset-csv/data)

- having a set of database of emails.csv in which we have marked the data sets and classified mail as spam or not and according to that we will classify a mail as spam or not.

> > Mail can be declared spam via the following:

- Targeted spam words like "free","call","stop".
- The highest frequency of words that are in spam mail data sets (emails.csv) are the words that are most frequently used in a spam mail.
- The number of same repeating words in spam mail and the length of the spam mail.
- If there is an exclamation mark (!), question mark (?), or quotations marks ("").
- Check if it contains any external suspicious URL links that are marked as scam.

## 4 Spam Email Classifier, using Naive Bayes Classifier

- Link to blog :- [https://www.kaggle.com/code/ddosad/spam-email-classifier](https://www.kaggle.com/code/ddosad/spam-email-classifier)

## 5 Email Spam Classification - Multiple ML Models

- Link to blog :- [https://www.kaggle.com/code/vainero/email-spam-classification-multiple-ml-models](https://www.kaggle.com/code/vainero/email-spam-classification-multiple-ml-models)

### TensorFlow.JS :- [https://www.tensorflow.org/](https://www.tensorflow.org/)

- A library for machine learning in javascript that we can use on a pre-trained model from Tensorflow.js
  we can create a simplified function to detect spam messages based on the data sets, predefined conditions and threshold count.

- Link :- [https://www.geeksforgeeks.org/detecting-spam-emails-using-tensorflow-in-python/](https://www.geeksforgeeks.org/detecting-spam-emails-using-tensorflow-in-python/)

[https://growww-stonks.vercel.app](https://growww-stonks.vercel.app/)
