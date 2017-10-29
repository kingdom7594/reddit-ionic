# -*- coding: utf-8 -*-
import scrapy
import logging


class RedditorSpider(scrapy.Spider):
    name = 'redditor'
    allowed_domains = ['reddit.com/']
    start_urls = ['https://www.reddit.com/']

    def parse(self, response):
        logging.warning("hello the world!")
